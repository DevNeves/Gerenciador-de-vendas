import { z } from 'zod';

const nameRegex = /[a-zA-ZÀ-ÿ\s'-]/;
const foneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
const postaCodeRegex = /^\d{5}-\d{3}$/;
const houseNumberRegex = /^[a-zA-Z0-9À-ÿ\s'-]+$/;
const addressRegex = /[a-zA-Z0-9À-ÿ\s'-]/;
const complementRegex = /^[a-zA-Z0-9À-ÿ\s'-]*$/;

export const customerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve ter no mínimo 2 caracteres. ' })
    .regex(nameRegex, { message: 'Nome inválido, o nome não pode ter caracteres númericos.' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  fone: z.string().regex(foneRegex, { message: 'Numero de telefone inválido.' }),
  birth_date: z
    .string()
    .date()
    .refine((data) => new Date(data) < new Date(), { message: 'Data de nascimento inválida' })
    .refine((data) => new Date(data) > new Date('1900-01-01'), {
      message: 'Data de nascimento inválida',
    }),
  city: z.string().refine((data) => data !== '', { message: 'Selecione uma cidade' }),
  district: z.string().refine((data) => data !== '', { message: 'Selecione um bairro' }),
  address: z
    .string()
    .min(2, { message: 'O nome da rua deve ter no mínimo 2 caracteres. ' })
    .regex(addressRegex, { message: 'Rua inválida' }),
  postal_code: z.string().regex(postaCodeRegex, { message: 'Cep inválido' }),
  house_number: z.string().regex(houseNumberRegex, { message: 'Numero inválido' }),
  complement: z.string().regex(complementRegex, { message: 'Complemento inválido' }),
});

const districtRegex = /[a-zA-Z]/;

export const districtSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Bairro deve ter pelo menos 3 caracteres' })
    .max(50, { message: 'Bairro deve ter no máximo 50 caracteres' })
    .regex(districtRegex, { message: 'Bairro deve conter pelo menos uma letra' }),
});

const cityRegex = /^[a-zA-ZÀ-ÿ\s'-]{3,}$/;
const ufRegex = /[a-zA-Z]/;

export const citySchema = z.object({
  name: z
    .string()
    .regex(cityRegex, {
      message: 'O nome deve conter apenas letras (incluindo acentuações), espaços e hifens.',
    })
    .min(3, { message: 'Deve conter um minimo de 3 caracteres.' }),
  uf: z
    .string()
    .toUpperCase()
    .regex(ufRegex, 'Sigla inválida.')
    .min(2, { message: 'A sigla UF tem que ter ao menos 2 caracteres.' })
    .max(2, { message: 'A sigla UF só deve possuir 2 caracteres. ' }),
});

const productRegex = /[a-zA-Z0-9À-ÿ\s'-]/;

export const productSchema = z.object({
  name: z
    .string()
    .regex(productRegex, { message: 'Produto inválido.' })
    .min(2, { message: 'Deve conter um minimo de 2 caracteres.' })
    .max(50, { message: 'Deve conter no máximo 50 caracteres.' }),
  price: z.preprocess(
    (value) => parseFloat(value),
    z.number({ message: 'Insira um preço ao produto.' })
  ),
});

export const salesSchema = z.object({
  buyer: z.string().refine((data) => data !== '', { message: 'Selecione um comprador' }),
  sale_date: z
    .string()
    .date()
    .refine((data) => new Date(data) < new Date(), { message: 'Data inválida' }),
});

export const saleItensSchema = z.object({
  product: z.string().refine((data) => data !== '', { message: 'Selecione um produto' }),
  qty: z.preprocess((value) => parseFloat(value), z.number()),
  price: z.preprocess((value) => parseFloat(value), z.number()),
  total: z.preprocess((value) => parseFloat(value), z.number()),
});
