declare module "lab-library" {
	function request(url: string, options: Object, authorization: string): string {}
	function shortenText(text: string, length: number): string {}
	function fileExtension(fileName: string): string {}
	function shuffleStr(text: string): string {}
	function formatPhoneNum(text: string): string {}
	function strToUrl(text: string): string {}
	function generateOtp(length: number): string {}
}
