const fs = require('fs');
const { argv } = require('process');
const env = argv[2];

try {
  console.log(argv);
  const config = fs.readFileSync(`./environment/${env}`, 'utf8');
  fs.writeFileSync('.env.local', config, 'utf8');
  fs.writeFileSync('./server/.env', config, 'utf8');
} catch (error) {
  console.log(error);
}
