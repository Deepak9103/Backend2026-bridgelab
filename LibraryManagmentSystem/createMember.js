import fs from "fs";
function createMember(memberId, name, membershipType) {
  try {
    let members = [];
    if (fs.existsSync("library.json")) {
      members = JSON.parse(fs.readFileSync("library.json", "utf-8"));
    }
    let alreadyExists = members.some(m => m.memberId === memberId);
    if (alreadyExists) {
      return "Member already exists!";
    }
    
    let newMember = {
      memberId,
      name,
      membershipType
    };
    members.push(newMember);
    fs.writeFileSync("library.json", JSON.stringify(members, null, 2));
    return "New Member created!";
  } 
  catch (error) {
    console.log("Error in createMember:", error);
  }
}

export default createMember;