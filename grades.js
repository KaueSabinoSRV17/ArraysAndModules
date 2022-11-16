

const getGradeLetter = grade => {
    const gradeF = grade < 60
    const gradeD = grade >= 60 && grade < 70
    const gradeC = grade >= 70 && grade < 80
    const gradeB = grade >= 80 && grade < 90
    const gradeA = grade >= 90
    return grade = 
        !gradeF
            ? gradeD
                ? 'D'
                : gradeC
                    ? 'C'
                    : gradeB
                        ? 'B'
                        :  gradeA
                            ? 'A'
                            : 'Invalid'
            : 'F'
        
}

const grades = [50,3,5,45,90]
const letterGrades = grades.map(getGradeLetter)

console.log(letterGrades)