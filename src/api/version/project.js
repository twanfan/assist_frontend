import request from '@/utils/v_request'

export function fetchList(query) {
  return request({
    url: 'version/project/',
    method: 'get',
    params: query
  })
}

export function fetchProject(id) {
  return request({
    url: 'version/project/',
    method: 'get',
    params: { id }
  })
}

export function deleteProject(data) {
  return request({
    url: 'version/project/',
    method: 'delete',
    data
  })
}

export function createProject(data) {
  return request({
    url: 'version/project/',
    method: 'post',
    data
  })
}

export function updateProject(data) {
  return request({
    url: 'version/project/',
    method: 'put',
    data
  })
}
