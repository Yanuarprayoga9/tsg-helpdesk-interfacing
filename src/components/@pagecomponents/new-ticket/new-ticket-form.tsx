import React from 'react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name harus minimal 2 karakter ',
  }),
  email: z.string().email().min(2, {
    message: 'Email harus minimal 2 karakter ',
  }),
  type: z.string().min(2, {
    message: 'Type harus minimal 2 karakter ',
  }),
  category: z.string().min(2, {
    message: 'Category harus minimal 2 karakter ',
  }),
  image: z.string().min(2, {
    message: 'Image harus minimal 2 karakter ',
  }),
  subject: z.string().min(2, {
    message: 'Subject harus minimal 2 karakter ',
  }),
  description: z.string().min(2, {
    message: 'Description harus minimal 2 karakter ',
  }),
});

export const NewTicketForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      type: '',
      category: '',
      image: '',
      subject: '',
      description: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 relative"
      >
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-16">
          <div className="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Type Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Type Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="bg-customPurple absolute bottom-0 right-2 "
          type="submit"
        >
          send ticket
        </Button>
      </form>
    </Form>
  );
};
