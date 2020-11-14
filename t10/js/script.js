let animal, gender, age;
function error() {
  alert("Input is not valid");
}

animal = prompt("What animal is the superhero most similar to?");
if (!animal.match(/\b[a-z]{1,20}\b/i)) {
    error();
} else {
  gender = prompt(
    "Is the superhero male or female? Leave blank if unknown or other"
  );
  if (!gender.match(/(^$|female|male)/i)) {
    error();
  } else {
    age = prompt("How old is the superhero?");
    if (!age.match(/\b[1-9]{1,5}\b/)) {
        error();
    } else {
      if (age < 18) {
        if (gender.match(/^$/)) {
          gender = gender.replace(/^$/, "-kid");
        } else {
          gender = gender.replace(/female/i, "-girl");
          gender = gender.replace(/male/i, "-boy");
        }
      } else {
        if (gender.match(/^$/)) {
          gender = gender.replace(/^$/, "-hero");
        } else {
          gender = gender.replace(/female/i, "-woman");
          gender = gender.replace(/male/i, "-man");
        }
      }
      alert("The superhero name is: " + animal + gender + "!");
    }
  }
}