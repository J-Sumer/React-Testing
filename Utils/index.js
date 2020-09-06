import CheckPropTypes from 'check-prop-types'

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

export const checkprops = (component, expectedProps) => {
  return CheckPropTypes(component.propsTypes, expectedProps, 'props', component.name)
}