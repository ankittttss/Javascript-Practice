function assertionobjectsequalEqual(expectedd, actuall,string) {
    // Check if both arguments are objects
    if (typeof expectedd === 'object' && typeof actuall === 'object') {
        // Get the keys of both objects
        const keys1 = Object.keys(expectedd);
        const keys2 = Object.keys(actuall);

        // Check if the number of keys are the same
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Check if all keys in obj1 exist in obj2
        for (let key of keys1) {
            if (!actuall.hasOwnProperty(key)) {
                return false;
            }
        }

        // Recursively check each key-value pair
        for (let key of keys1) {
            if (!assertionobjectsequalEqual(expectedd[key], actuall[key],string)) {
                return false;
            }
        }

        // If all checks pass, objects are equal
        return true;
    }

    // If arguments are not objects, compare them directly
    return expectedd === actuall;
}



const expected = {foo:6,bar:{bar2:244,car:22}};
const actual = {foo:6,bar:{bar2:24,car:22}}


if(assertionobjectsequalEqual(actual, expected,"Find the two objects are equal") == true){
    console.log("Passed"); 
}

else{
    let expectedd = JSON.stringify(expected);
    let actuall = JSON.stringify(actual);
    let answerr = `FAILED EXPECTED ${expectedd}, but got ${actuall}`;
    console.log(answerr);
}

