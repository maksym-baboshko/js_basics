// Logical Operators
const isAdmin = true;
const canWrite = true;

console.log(`System file ${isAdmin && canWrite}`);
console.log(`Regular file ${isAdmin || canWrite}`);
console.log(`Invert admin rights ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`System file with editing ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);
