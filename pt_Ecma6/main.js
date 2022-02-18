function alumno(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 17;
    var country = country || 'ES'
    console.log(name, age, country);
}
alumno()

//ES6

function nuevoAlumno(name = 'Jose', age = 22, country = 'FR') {
    console.log(name, age, country);
}

nuevoAlumno()
nuevoAlumno('Maria', 18, 'IT')