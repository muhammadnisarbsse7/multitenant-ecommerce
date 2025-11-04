// import Image from "next/image";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@radix-ui/react-progress';

export default function Home() {
  return (
    <>
      <Button variant="elevated">Hello</Button>
      <Input value={'Enter text here'}></Input>
      <Progress value={50} />
      <Textarea placeholder="fff" />
    </>
  );
}
