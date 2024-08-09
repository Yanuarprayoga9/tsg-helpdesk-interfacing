// components/ReplyForm.tsx
import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Define the schema using zod
const replyFormSchema = z.object({
  email: z.string().email({ message: 'Email harus valid' }),
  type: z.string().min(1, { message: 'Pilih tipe request' }),
  status: z.string().min(1, { message: 'Pilih status' }),
  body: z.string().min(2, { message: 'Body harus minimal 2 karakter' }),
});

export const ReplyForm: React.FC = () => {
  // Define your form using useForm hook with zodResolver
  const form = useForm<z.infer<typeof replyFormSchema>>({
    resolver: zodResolver(replyFormSchema),
    defaultValues: {
      email: '',
      type: '',
      status: '',
      body: '',
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof replyFormSchema>) {
    console.log(values);
    // You can handle the form submission here, such as making an API request
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h5 className="text-lg font-bold text-gray-800 mb-4">Reply to Ticket</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Email</FormLabel>
                <FormControl>
                  <Input placeholder="Type Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Request Ticket Type</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deposit">Deposit Issue</SelectItem>
                      <SelectItem value="withdrawal">Withdrawal Issue</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ongoing">On-Going</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ticket Body</FormLabel>
              <FormControl>
                <Textarea placeholder="Type ticket issue here..." rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end w-full mt-4">
          <Button type="submit" className="bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Submit Reply
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReplyForm;
