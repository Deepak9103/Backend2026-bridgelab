import fs from "fs";
function borrowBooks(memberId, borrowedBooks) {
  try {
    let records = [];
    if (fs.existsSync("borrowRecord.json")) {
      records = JSON.parse(fs.readFileSync("borrowRecord.json", "utf-8"));
    }
    let newRecord = {
      memberId,
      books: borrowedBooks,
    };
    records.push(newRecord);
    fs.writeFileSync(
      "borrowRecord.json",
      JSON.stringify(records, null, 2)
    );
    console.log("Borrow Record Created Successfully!");
  } catch (error) {
    console.log("Error in borrowBooks:", error);
  }
}
export default borrowBooks;