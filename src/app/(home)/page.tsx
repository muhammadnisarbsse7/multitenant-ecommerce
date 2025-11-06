// import Image from "next/image";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@radix-ui/react-progress';

export default function Home() {
  return (
    <>
      <Button variant="elevated">Helloww</Button>
      <Input value={'Enter text here'}></Input>
      {/* <Progress value={50} /> */}

      <Progress value={55} className="h-5"></Progress>
      <Textarea placeholder="fff" />
    </>
  );
}
