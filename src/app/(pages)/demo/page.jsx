import MyDemo from "@/app/components/mydemo";
import MyDemo2 from "@/app/components/mydemo2";

export default function DemoPage() {
  return (
    <div>
      Demo Page
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        inventore.
      </p>
      {/* <MyDemo /> */}
      <MyDemo2 name="jay kishan" roll={34} />
    </div>
  );
}
