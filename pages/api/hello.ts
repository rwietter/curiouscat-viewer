// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string
}

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({ name: 'John Doe' });
}
