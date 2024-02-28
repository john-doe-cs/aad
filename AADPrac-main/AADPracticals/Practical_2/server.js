const { MongoClient } = require('mongodb');

// Connection URI - Replace this with your MongoDB Atlas connection string
const uri = 'mongodb+srv://Aman:Aman@cluster0.os02inc.mongodb.net/Prac_2?retryWrites=true&w=majority&appName=Cluster0';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
    }
}

// Insert data
async function insertDocument(collectionName, document) {
    try {
        const db = client.db('Prac_2'); // Replace 'Aman' with your database name
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(document);
        if (result && result.ops && result.ops.length > 0) {
            console.log('Document inserted:', result.ops[0]);
            return result.ops[0];
        } else {
            console.error('Error inserting document:', result);
        }
    } catch (err) {
        console.error('Error inserting document:', err);
    }
}
// Read data
async function findDocuments(collectionName, query = {}) {
    try {
        const db = client.db('Prac_2'); // Replace 'Aman' with your database name
        const collection = db.collection(collectionName);
        const documents = await collection.find(query).toArray();
        console.log('Documents found:', documents);
        return documents;
    } catch (err) {
        console.error('Error finding documents:', err);
    }
}

// Update data
// Update data
async function updateDocument(collectionName, filter, update) {
    try {
        const db = client.db('Aman'); // Replace 'Aman' with your database name
        const collection = db.collection(collectionName);
        const result = await collection.updateOne(filter, { $set: update });
        console.log('Document updated:', result.modifiedCount);
        if (result.modifiedCount === 1) {
            console.log('Updated data:', update);
        } else {
            console.log('No document updated.');
        }
        return result.modifiedCount;
    } catch (err) {
        console.error('Error updating document:', err);
    }
}


// Delete data
async function deleteDocument(collectionName, filter) {
    try {
        const db = client.db('Prac_2'); // Replace 'Aman' with your database name
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(filter);
        console.log('Document deleted:', result.deletedCount);
        return result.deletedCount;
    } catch (err) {
        console.error('Error deleting document:', err);
    }
}

// Example usage
(async () => {
    await connect();

    // Insert a document
    const insertedDocument = await insertDocument('books', { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' });

    // Find documents
    const foundDocuments = await findDocuments('books'); // Adjust the collection name if needed

    // Update a document
    const updatedCount = await updateDocument('books', { title: 'The Great Gatsby' }, { author: 'Fitzgerald' }); // Verify the filter

    // Delete a document
    const deletedCount = await deleteDocument('books', { title: 'The Great Gatsby' }); // Verify the filter


    // Close the connection
    await client.close();
})();
