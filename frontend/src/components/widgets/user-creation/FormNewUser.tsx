"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarRadio from "./AvatarRadio";
import avatars from "./avatars.json";

const avatarsNames = avatars.avatars.map((avatar) => avatar.name);
const formSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  avatar: z.enum(["username", ...avatarsNames], {
    required_error: "El avatar es requerido.",
  }),
});

export function FormNewUser() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      avatar: "username",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder='nombre' {...field} />
              </FormControl>
              <FormDescription>Ingrese su nombre.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='avatar'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Avatar</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex space-x-2'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0 checked:bg-green-400'>
                    <FormControl>
                      <RadioGroupItem value='username' className='hidden' />
                    </FormControl>
                    <FormLabel>
                      <Avatar>
                        <AvatarFallback
                          className={`${
                            form.getValues("avatar") === "username"
                              ? "border-green-400"
                              : ""
                          } border`}
                        >
                          {form.getValues("username").slice(0, 2) || "Na"}
                        </AvatarFallback>
                      </Avatar>
                    </FormLabel>
                  </FormItem>

                  {avatars?.avatars.map((avatar) => {
                    return (
                      <AvatarRadio
                        key={avatar.id}
                        form={form}
                        avatarFallback={avatar.name.slice(0, 2)}
                        avatarValue={avatar.name}
                        avatarUrl={avatar.url}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Añadir</Button>
      </form>
    </Form>
  );
}
