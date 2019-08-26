function displayPosition(company: string, title: string, description: string) {
    console.log(title + " at " + company);
    console.log(description);
    
}
function displaySkills(skills: Array<string>) {
    var skillsStr = "Skills: "
    console.log(skillsStr);
    for(var i = 0; i < skills.length; i++) {
        if(i % 2 == 0) {
            displaySkill(skills[i], true);
        }
        else {
            displaySkill(skills[i], false);
        }
    }
}

function displaySkill(skill: string, cool: boolean) {
    if(cool) {
        console.log("BAM: " + skill);
    }
    else {
        console.log("skill: " + skill);
    }
}

console.log("----RESUME----")
console.log("Name: DWIGHT SCHRUTE");
displayPosition("Dunder Mifflin", "Paper Salesman", "Responsible for Selling Paper");
displaySkills(["Rockclimbing", "Bathunting", "Snake running"]);
console.log("Past Employment: Staples, DunderMifflin");