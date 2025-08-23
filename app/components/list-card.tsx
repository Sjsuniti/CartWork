"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";

type UniformArrayTypedKeysValues<T> = {
  [K in keyof T]: T[K] extends T[keyof T] ? T[K] : never;
};
export type UniformArray<T extends object> = UniformArrayTypedKeysValues<T>[];

interface ListCardPropsBase<T extends Record<string, ReactNode>> {
  data: UniformArray<T>;
  title?: string | ReactNode;
  description?: string | ReactNode;
  rowHeight?: number;
  columnAlignments?: ("left" | "center" | "right")[];
  showBorderLine?: boolean;
  columnsToHide?: Array<keyof T>;
  className?: string;
  noFoundDataText?: string;
  topLeftCallToAction?: JSX.Element;
  isLoading?: boolean;
  skeletonRow?: number;
  stripedRows?: {
    enable: boolean;
    evenRowColor?: string;
    oddRowColor?: string;
  };
}

type ClickableConfig<T extends Record<string, ReactNode>> = {
  clickableColumns: Array<keyof T>;
  onRowClicked: (rowData: T) => void;
};

export type ListCardProps<T extends Record<string, ReactNode>> =
  ListCardPropsBase<T> &
    (
      | ClickableConfig<T>
      | {
          clickableColumns?: never;
          onRowClicked?: never;
        }
    );

export function ListCard<T extends Record<string, ReactNode>>({
  data,
  title = "Recent Orders",
  description,
  columnAlignments = [],
  showBorderLine = false,
  clickableColumns,
  onRowClicked,
  columnsToHide,
  rowHeight,
  className = "",
  noFoundDataText = "No available data",
  topLeftCallToAction,
  isLoading = false,
  skeletonRow = 1,
  stripedRows = { enable: false },
}: ListCardProps<T>) {
  const headers: Array<keyof T> =
    data && data.length > 0 ? (Object.keys(data[0]) as Array<keyof T>) : [];

  const updatedHeaders = columnsToHide
    ? headers.filter((header) => !columnsToHide?.includes(header))
    : headers;

  const isTitleString = typeof title === "string" ? title : <>{title}</>;
  const isDescriptionString = () => {
    if (description) {
      return typeof description === "string" ? description : <>{description}</>;
    }
    return "";
  };

  // ✅ Loading state
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-10 rounded-sm w-[200px] dark:bg-neutral-800" />
          </CardTitle>
          {description && (
            <CardDescription>
              <Skeleton className="h-6 rounded-sm w-[250px] dark:bg-neutral-800" />
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="mt-8">
          <Table>
            <TableBody>
              {Array.from({ length: skeletonRow }).map((_, index) => (
                <TableRow key={index} className="hover:bg-inherit">
                  {updatedHeaders.map((_, colIndex) => (
                    <TableCell key={colIndex}>
                      <Skeleton className="h-[38px] rounded-sm w-full dark:bg-neutral-800" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  // ✅ Empty state
  if (!data || data.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{noFoundDataText}</p>
        </CardContent>
      </Card>
    );
  }

  // ✅ Data render state
  return (
    <Card className={`p-0 ${className}`}>
      <CardHeader className="p-6">
        <CardTitle className="pb-0 h-8">
          <div className="flex justify-between items-center">
            <span>{isTitleString}</span>
            {topLeftCallToAction}
          </div>
        </CardTitle>
        <CardDescription className="pt-0">
          {isDescriptionString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableBody>
            {data.map((item, index) => {
              const rowBgColor = stripedRows?.enable
                ? index % 2 === 0
                  ? stripedRows.evenRowColor || "bg-gray-50"
                  : stripedRows.oddRowColor || "bg-white"
                : "";

              return (
                <TableRow
                  key={index}
                  style={{ height: rowHeight ? `${rowHeight}px` : "auto" }}
                  className={`px-5 py-7 hover:bg-inherit ${rowBgColor} ${
                    !showBorderLine && "border-none"
                  }`}
                >
                  {updatedHeaders.map((header, colIndex) => {
                    const isClickable = clickableColumns?.includes(header);
                    const alignment = columnAlignments[colIndex] || "left";

                    return (
                      <TableCell
                        key={`${index}-${String(header)}`}
                        className={`text-${alignment}`}
                        onClick={() => {
                          if (isClickable && onRowClicked) {
                            onRowClicked(item);
                          }
                        }}
                      >
                        {item[header]} {/* ✅ JSX or text both work */}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

