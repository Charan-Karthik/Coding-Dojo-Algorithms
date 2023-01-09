// WebMD Algo
// Given an array of ailments, and an array of medication objects that have a nested array of treatableSymptoms,
// return the medication name(s) that treats the most given symptoms.

function webMD(symptoms, medications) {
    let meds = [];
    let medicationToNumSymptoms = {};

    for (let medication of medications) {
        let count = 0;
        for (let symptom of symptoms) {
            if (medication.treatableSystems.includes(symptom)) {
                count += 1;
            }
        }
        medicationToNumSymptoms[medication.name] = count;
    }

    let mostSymptoms = 0;
    for (key in medicationToNumSymptoms) {
        if (medicationToNumSymptoms[key] > mostSymptoms) {
            mostSymptoms = medicationToNumSymptoms[key];
        }
    }

    for (key in medicationToNumSymptoms) {
        if (medicationToNumSymptoms[key] === mostSymptoms) {
            meds.push(key);
        }
    }

    return meds
}