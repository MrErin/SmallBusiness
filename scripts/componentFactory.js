const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes
	return component
}
const h1 = (...params) => componentFactory('h1', ...params)
const section = (...params) => componentFactory('section', ...params)
const div = (...params) => componentFactory('div', ...params)
const p = (...params) => componentFactory('p', ...params)
const article = (...params) => componentFactory('article', ...params)
