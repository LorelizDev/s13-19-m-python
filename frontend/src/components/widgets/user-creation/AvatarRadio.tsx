import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

interface AvatarProps {
  form: any;
  avatarFallback: string;
  avatarValue: string;
  avatarUrl: string;
}

export default function AvatarRadio({
  form,
  avatarFallback,
  avatarValue,
  avatarUrl,
}: AvatarProps) {
  return (
    <FormItem className='flex items-center'>
      <FormControl>
        <RadioGroupItem value={avatarValue} className='hidden' />
      </FormControl>
      <FormLabel className='font-normal '>
        <Avatar
          className={`${
            form.getValues("avatar") === avatarValue ? "border-green-400" : ""
          } border`}
        >
          <AvatarImage src={avatarUrl} alt={avatarFallback} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </FormLabel>
    </FormItem>
  );
}
