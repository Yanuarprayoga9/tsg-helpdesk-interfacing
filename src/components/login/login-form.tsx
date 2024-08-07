import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Link from 'next/link';
import LoadingSpinner from '../ui/loading-spinner';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username harus minimal 2 karakter ',
  }),
  password: z.string().min(2, {
    message: 'Password harus minimal 2 karakter ',
  }),
});

export const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    toast('Mengautentikasi', { type: 'info', autoClose: 3000 });
    setTimeout(() => {
      toast('Berhasil', { type: 'success', autoClose: 100 });
      setLoading(false);
      // Show success toast
      router.push('/dashboard/');
    }, 3000);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col justify-center"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="tulis username..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="*******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap text-sm justify-center gap-3">
          <p className=" text-slate-500">Lupa password?</p>
          <Link href={'/fotgot'} className="text-blue-400">
            Hubungi Administrator
          </Link>
        </div>
        <Button type="submit" disabled={loading} className="bg-customPurple">
          {loading ? <LoadingSpinner loading={loading} size={5} /> : 'Login'}
        </Button>
      </form>
    </Form>
  );
};
