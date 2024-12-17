function getTopNote(student) {
    const topNote = Math.max(...student.notes);
    return { name: student.name, topNote };
}

const student = { name: 'John', notes: [3, 5, 4] };
console.log(getTopNote(student)); // { name: "John", topNote: 5 }