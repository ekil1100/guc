import type { NextApiRequest, NextApiResponse } from 'next'
import got from 'got'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const file = await got(
    'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Clash/RuleSet/Unbreak.yaml'
  )
  res.status(200).send(file.body)
}
