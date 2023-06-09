export interface MembershipPayload {
    avatarURL?: string;
    id?: string;
    username?: string;
    discriminator?: string;
    color?: string;
    title?: string;
}

export interface Role {
    id: string;
    title: string;
}

export interface APIResponse {
    staff: (Role & { members: MembershipPayload[] })[];
    members: (Role & { members: MembershipPayload[] })[];
}
