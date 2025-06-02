import { Button } from "./ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";

const ToolTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="bg-transparent h-fit gap-2">
        <TabsTrigger value="text_to_speech" asChild>
          <Button
            variant="outline"
            className="rounded-lg border-gray-300 px-4 py-2 hover:border-black data-[state=active]:bg-neutral-100"
          >
            TEXT TO SPEECH
          </Button>
        </TabsTrigger>
        <TabsTrigger value="speech_to_text" asChild>
          <Button
            variant="outline"
            className="rounded-lg border-gray-300 px-4 py-2 hover:border-black data-[state=active]:bg-neutral-100 data-[state=active]:font-semibold"
          >
            SPEECH TO TEXT
          </Button>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="text_to_speech">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="speech_to_text">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default ToolTabs;
