// 1. Convert JSON Text to JavaScript Object
function convertJsonToObject() {
    const jsonText = document.getElementById('jsonText').value;
    try {
        const jsonObject = JSON.parse(jsonText);  // Parsing the JSON text to JavaScript Object
        document.getElementById('jsonResult').textContent = JSON.stringify(jsonObject, null, 2);  // Displaying the object
    } catch (e) {
        document.getElementById('jsonResult').textContent = 'Invalid JSON!';
    }
}

// 2. Convert JSON Date to Date Object
function convertJsonDate() {
    const jsonText = document.getElementById('jsonDate').value;
    try {
        const jsonObject = JSON.parse(jsonText);  // Parsing the JSON text
        const date = new Date(jsonObject.date);  // Converting the date string to Date object
        document.getElementById('jsonDateResult').textContent = date.toString();  // Displaying the Date object
    } catch (e) {
        document.getElementById('jsonDateResult').textContent = 'Invalid JSON or Date Format!';
    }
}

// 3. Convert JSON to CSV and CSV to JSON

// Convert JSON to CSV
function jsonToCsv() {
    const jsonText = document.getElementById('jsonForCSV').value;
    try {
        const jsonObject = JSON.parse(jsonText);  // Parsing the JSON text
        let csv = 'name,age\n';  // CSV header
        jsonObject.forEach(item => {
            csv += `${item.name},${item.age}\n`;  // Adding rows of data
        });
        document.getElementById('csvResult').textContent = csv;  // Displaying the CSV result
    } catch (e) {
        document.getElementById('csvResult').textContent = 'Invalid JSON!';
    }
}

// Convert CSV to JSON
function csvToJson() {
    const csvText = document.getElementById('csvInput').value;
    try {
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');
        const jsonResult = rows.slice(1).map(row => {
            const values = row.split(',');
            let obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            return obj;
        });
        document.getElementById('jsonFromCsvResult').textContent = JSON.stringify(jsonResult, null, 2);
    } catch (e) {
        document.getElementById('jsonFromCsvResult').textContent = 'Invalid CSV format!';
    }
}

// 4. Create Hash from String
function createHash() {
    const crypto = require('crypto');  // Importing crypto module (server-side)

    const stringToHash = document.getElementById('inputString').value;
    if (stringToHash) {
        const hash = crypto.createHash('sha256');  // Creating hash using SHA-256 algorithm
        hash.update(stringToHash);  // Updating the hash with the input string
        const hashedString = hash.digest('hex');  // Getting the hash value in hexadecimal format
        document.getElementById('hashResult').textContent = hashedString;  // Displaying the hash
    } else {
        document.getElementById('hashResult').textContent = 'Please enter a string to hash.';
    }
}
