import { request } from './request'

export function getPlan(token: string) {
  return request({
    url: '/api/NewCalendar/GetPlanByLogin',
    method: 'get',
    params: { token },
  })
}
