/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Home = "home",
	ProjectsEn = "projects_en",
	ProjectsFr = "projects_fr",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type HomeRecord = {
	intro?: string
	text1?: string
	text2?: string
	cta?: string
	nb_projects?: string
	latest?: string
}

export enum ProjectsEnCategoryOptions {
	"Branding" = "Branding",
	"Webdesign" = "Webdesign",
	"Typography" = "Typography",
	"Development" = "Development",
	"3D" = "3D",
	"Motion Design" = "Motion Design",
	"Print" = "Print",
	"UI/UX" = "UI/UX",
	"Illustration" = "Illustration",
	"Logo Design" = "Logo Design",
	"Packaging" = "Packaging",
	"Editorial" = "Editorial",
}

export enum ProjectsEnSoftwaresOptions {
	"Figma" = "Figma",
	"Illustrator" = "Illustrator",
	"InDesign" = "InDesign",
	"AfterEffects" = "AfterEffects",
	"Photoshop" = "Photoshop",
	"Dimension" = "Dimension",
	"Blender" = "Blender",
	"Vue.js" = "Vue.js",
	"HTML" = "HTML",
	"CSS" = "CSS",
	"Tailwind" = "Tailwind",
}
export type ProjectsEnRecord = {
	title?: string
	description?: string
	card_image?: string
	image1?: string
	image2?: string
	image3?: string
	image4?: string
	category?: ProjectsEnCategoryOptions[]
	alt_img?: string
	date?: IsoDateString
	intro?: string
	text1?: string
	text2?: string
	textli1?: string
	textli2?: string
	textli3?: string
	text3?: string
	text4?: string
	outro?: string
	softwares?: ProjectsEnSoftwaresOptions[]
	softwares_icons?: string[]
}

export enum ProjectsFrCategoryOptions {
	"Branding" = "Branding",
	"Webdesign" = "Webdesign",
	"Typography" = "Typography",
	"Development" = "Development",
	"3D" = "3D",
	"Motion Design" = "Motion Design",
	"Print" = "Print",
	"UI/UX" = "UI/UX",
	"Illustration" = "Illustration",
	"Logo Design" = "Logo Design",
	"Packaging" = "Packaging",
	"Editorial" = "Editorial",
}

export enum ProjectsFrSoftwaresOptions {
	"Figma" = "Figma",
	"Illustrator" = "Illustrator",
	"InDesign" = "InDesign",
	"AfterEffects" = "AfterEffects",
	"Photoshop" = "Photoshop",
	"Dimension" = "Dimension",
	"Blender" = "Blender",
	"Vue.js" = "Vue.js",
	"HTML" = "HTML",
	"CSS" = "CSS",
	"Tailwind" = "Tailwind",
}
export type ProjectsFrRecord = {
	title?: string
	description?: string
	card_image?: string
	category?: ProjectsFrCategoryOptions[]
	alt_image?: string
	date?: IsoDateString
	intro?: string
	text1?: string
	text2?: string
	textli1?: string
	textli2?: string
	textli3?: string
	text3?: string
	text4?: string
	outro?: string
	softwares?: ProjectsFrSoftwaresOptions[]
	softwares_icons?: string[]
	gallery?: string[]
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type HomeResponse = Required<HomeRecord> & BaseSystemFields
export type ProjectsEnResponse = Required<ProjectsEnRecord> & BaseSystemFields
export type ProjectsFrResponse = Required<ProjectsFrRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	home: HomeRecord
	projects_en: ProjectsEnRecord
	projects_fr: ProjectsFrRecord
	users: UsersRecord
}

export type CollectionResponses = {
	home: HomeResponse
	projects_en: ProjectsEnResponse
	projects_fr: ProjectsFrResponse
	users: UsersResponse
}