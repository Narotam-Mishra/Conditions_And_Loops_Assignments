function calculateGrade(mark)
{
    if(mark > 90){
        console.log('A Grade');
    }else if(mark>70 && mark<=90){
        console.log('B Grade');
    }else if(mark>=50 && mark<=70){
        console.log('C Grade');
    }else{
        console.log('F Grade');
    }
}

let marks = 94;
calculateGrade(marks);