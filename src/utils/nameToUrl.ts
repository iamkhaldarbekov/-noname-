export function nameToUrl(name: string) {
	return name.toLowerCase().replaceAll(" ", "-");
}