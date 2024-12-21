function printName(name: string | null): void {
  console.log((name?.toUpperCase() ?? ""));
}

printName(null); //Prints an empty string
printName("John"); //Prints "JOHN"