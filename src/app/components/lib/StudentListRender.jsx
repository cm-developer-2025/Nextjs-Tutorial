import { students } from "@/app/userdata/student";
export function StudentListRender() {
  return (
    <div className="max-w-4xl">
      {students.map((student) => {
        return (
          <div key={student.id} className="flex  w-full justify-between gap-5">
            <div className="border border-gray-200 my-2 w-full p-5">
              {student.id}
            </div>
            <div className="border border-gray-200 my-2 w-full p-5">
              {student.name}
            </div>
            <div className="border border-gray-200 my-2 w-full p-5">
              {student.sem}
            </div>
          </div>
        );
      })}
    </div>
  );
}
