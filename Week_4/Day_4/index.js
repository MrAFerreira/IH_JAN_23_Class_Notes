//ODM
//Object Document Mapper

const mongoose = require('mongoose');

//Import the cat model
const Cat = require('./models/Cat');

//We can coonect to an existing DB or create a new one

//.then version
/* mongoose
  .connect('mongodb://localhost/animals')
  .then((x) => {
    console.log(`Connected to: ${x.connections[0].name}`);
  })
  .catch((err) => console.log(err));
 */

//Async await version

//Models - Allow us to do CRUD
//Schemas

//const Cat = mongoose.model('Cat', { name: String });

//const tom = new Cat({ name: 'Tom' });

const felix = { name: 'Felix', color: 'black' };

async function manageDb() {
  try {
    //Connect to DB
    await mongoose.connect('mongodb://localhost/animals');

    /* let savedCat = await tom.save();
    console.log(savedCat); */

    //Creating
    //await Cat.create({ name: 'Tom', age: 22, color: 'white' });
    //await Cat.create(felix);

    //Reading
    //let greyCats = await Cat.find({ age: { $gte: 12 } }); // -> always returns an array

    //findOne and FindbyId return a single object
    let singleCat = await Cat.findOne({ age: { $gte: 12 } });
    //let idCat = await Cat.findById('63e4eed37419feeeeb30c41d');

    //Update
    //first we target then we change
    //updateMany targets ALL that fulfill the query
    //await Cat.updateMany({ color: 'grey' }, { age: 25 });

    //tragets just one
    //await Cat.updateOne({ color: 'grey' }, { age: 25 });

    //await Cat.findByIdAndUpdate('63e4eed37419feeeeb30c41d', { color: 'orange' });

    //Delete

    //await Cat.deleteMany({ color: 'orange' });
    //await Cat.deleteOne({ color: 'white' });

    await Cat.findByIdAndRemove('63e4f3e5dbb304aa57b1bc3f');
    //await Cat.findByIdAndRemove(singleCat._id);

    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}

manageDb();
