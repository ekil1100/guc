import type { NextApiRequest, NextApiResponse } from 'next'
import got from 'got'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { domain, path, ssl } = req.query
  const options = {
    domain: 'raw.githubusercontent.com',
    path: '',
    http: 'https://',
  }
  if (ssl === 'true') options.http = 'http://'
  if (domain && typeof domain === 'string') options.domain = domain
  if (path && typeof path === 'string') options.path = path
  const file = await got(`${options.http}${options.domain}${options.path}`)
  res.status(200).send(file.body)
}
