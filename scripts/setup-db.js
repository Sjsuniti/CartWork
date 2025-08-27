const { execSync } = require('child_process');

console.log('Setting up database...');

try {
  // Generate migration
  console.log('Generating migration...');
  execSync('npx drizzle-kit generate', { stdio: 'inherit' });
  
  // Push to database
  console.log('Pushing to database...');
  execSync('npx drizzle-kit push', { stdio: 'inherit' });
  
  console.log('Database setup complete!');
} catch (error) {
  console.error('Error setting up database:', error.message);
  process.exit(1);
}