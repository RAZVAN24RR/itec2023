const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');
mongoose.set('strictQuery', false);
// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('DB con');
}

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log(`App running on port ${port}...`);
});
