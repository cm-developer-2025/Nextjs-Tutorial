export default function PropsExample({ student }) {
  const { roll, sem, studentName } = student;
  return (
    <div>
      <p>This is Props Example Component</p>
      <p>
        Student Name {studentName}, roll = {roll}, semester is {sem}
      </p>
    </div>
  );
}
