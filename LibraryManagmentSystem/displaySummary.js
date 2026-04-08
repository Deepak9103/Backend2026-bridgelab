// src/displaySummary.js
// Function to display borrowing summary with fine discount
import fs from "fs";
function displaySummary(memberId, lateFine) {
  try {
    let members = JSON.parse(fs.readFileSync("library.json", "utf-8"));

    let member = members.find(m => m.memberId === memberId);

    if (!member) {
      console.log("Member Not Found!");
      return;
    }

    let records = JSON.parse(fs.readFileSync("borrowRecord.json", "utf-8"));

    let record = records.find(r => r.memberId === memberId);

    if (!record) {
      console.log("No Borrow Record Found!");
      return;
    }
    let totalValue = 0;
    record.books.forEach(book => {
      totalValue += book.price;
    });

    let discount = 0;

    if (member.membershipType === "Normal") {
      discount = 0.05; 
    } 
    else if (member.membershipType === "Gold") {
      discount = 0.15; 
    }

    let finalFine = lateFine - (lateFine * discount);
    console.log("Member Name:", member.name);
    console.log("Membership Type:", member.membershipType);
    console.log("\nBorrowed Books:");
    record.books.forEach(book => {
      console.log(`   ${book.title}`);
    });
    console.log("   Total Book Value: " + "Rs. " + totalValue);
    console.log("   Late Fine Before Discount: " + "Rs. " + lateFine);
    console.log("   Discount:", discount * 100 + "%" );
    console.log("   Late Fine After Discount: "+ "Rs. " + finalFine);

  } 
  catch (error) {
    console.log(error);
  }
}

export default displaySummary;