export interface WP_User {
    id:                 number;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    email:              string;
    url:                string;
    description:        string;
    link:               string;
    locale:             string;
    nickname:           string;
    slug:               string;
    roles:              string[];
    registered_date:    Date;
    capabilities:       { [key: string]: boolean };
    extra_capabilities: ExtraCapabilities;
    avatar_urls:        { [key: string]: string };
    meta:               any[];
    is_super_admin:     boolean;
    _links:             Links;
}

export interface Links {
    self:       Collection[];
    collection: Collection[];
}

export interface Collection {
    href: string;
}

export interface ExtraCapabilities {
    administrator: boolean;
}