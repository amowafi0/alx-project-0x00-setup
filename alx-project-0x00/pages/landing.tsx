import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="p-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      {/* Button Showcase Section */}
      <div className="my-8">
        <h2 className="text-lg font-semibold mb-4">Button Component Showcase</h2>
        
        {/* Small Buttons */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Small Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Small Rounded SM" styles="px-3 py-1 text-sm rounded-sm" />
            <Button title="Small Rounded LG" styles="px-3 py-1 text-sm rounded-lg" />
            <Button title="Small Rounded Full" styles="px-4 py-1 text-sm rounded-full" />
          </div>
        </div>

        {/* Medium Buttons */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Medium Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Medium Rounded SM" styles="px-4 py-2 text-base rounded-sm" />
            <Button title="Medium Rounded LG" styles="px-4 py-2 text-base rounded-lg" />
            <Button title="Medium Rounded Full" styles="px-6 py-2 text-base rounded-full" />
          </div>
        </div>

        {/* Large Buttons */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-2">Large Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Large Rounded SM" styles="px-6 py-3 text-lg rounded-sm" />
            <Button title="Large Rounded LG" styles="px-6 py-3 text-lg rounded-lg" />
            <Button title="Large Rounded Full" styles="px-8 py-3 text-lg rounded-full" />
          </div>
        </div>
      </div>

      {/* Card Components Section */}
      <div className="my-8">
        <h2 className="text-lg font-semibold mb-4">Property Cards</h2>
        <div className="flex flex-col gap-6">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
export default Landing