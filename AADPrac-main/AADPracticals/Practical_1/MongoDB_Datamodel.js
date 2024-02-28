const { MongoClient } = require('mongodb');

// Connection URI - Replace this with your MongoDB Atlas connection string
const uri = 'mongodb+srv://Aman:Aman@cluster0.os02inc.mongodb.net/Aman?retryWrites=true&w=majority&appName=Cluster0';

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

// Define data models
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

// Insert data
async function insertUser(userData) {
    const db = client.db('Aman'); // Replace 'Aman' with your database name
    const usersCollection = db.collection('users');
    await usersCollection.insertOne(userData);
    console.log('User inserted:', userData);
}

async function insertPost(postData) {
    const db = client.db('Aman'); // Replace 'Aman' with your database name
    const postsCollection = db.collection('posts');
    await postsCollection.insertOne(postData);
    console.log('Post inserted:', postData);
}

// Query data
async function findUserByUsername(username) {
    const db = client.db('Aman'); // Replace 'Aman' with your database name
    const usersCollection = db.collection('users');
    const foundUser = await usersCollection.findOne({ username: username });
    console.log('Found user by username:', foundUser);
    return foundUser;
}

async function findPostsByAuthor(author) {
    const db = client.db('Aman'); // Replace 'Aman' with your database name
    const postsCollection = db.collection('posts');
    const foundPosts = await postsCollection.find({ author: author }).toArray();
    console.log('Found posts by author:', foundPosts);
    return foundPosts;
}

// Example usage
(async () => {
    await connect();

    // Create user
    const user1 = new User('john_doe', 'john@example.com');
    await insertUser(user1);

    // Create post
    const post1 = new Post('My First Post', 'This is my first post content.', 'john_doe');
    await insertPost(post1);

    // Find user by username
    const foundUser = await findUserByUsername('john_doe');

    // Find posts by author
    const foundPosts = await findPostsByAuthor('john_doe');
})();
