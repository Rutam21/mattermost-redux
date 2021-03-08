// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const values = {
    INVITE_USER: 'invite_user',
    ADD_USER_TO_TEAM: 'add_user_to_team',
    USE_SLASH_COMMANDS: 'use_slash_commands',
    MANAGE_SLASH_COMMANDS: 'manage_slash_commands',
    MANAGE_OTHERS_SLASH_COMMANDS: 'manage_others_slash_commands',
    CREATE_PUBLIC_CHANNEL: 'create_public_channel',
    CREATE_PRIVATE_CHANNEL: 'create_private_channel',
    MANAGE_PUBLIC_CHANNEL_MEMBERS: 'manage_public_channel_members',
    MANAGE_PRIVATE_CHANNEL_MEMBERS: 'manage_private_channel_members',
    READ_PUBLIC_CHANNEL_GROUPS: 'read_public_channel_groups',
    READ_PRIVATE_CHANNEL_GROUPS: 'read_private_channel_groups',
    ASSIGN_SYSTEM_ADMIN_ROLE: 'assign_system_admin_role',
    MANAGE_ROLES: 'manage_roles',
    MANAGE_TEAM_ROLES: 'manage_team_roles',
    MANAGE_CHANNEL_ROLES: 'manage_channel_roles',
    MANAGE_SYSTEM: 'manage_system',
    CREATE_DIRECT_CHANNEL: 'create_direct_channel',
    CREATE_GROUP_CHANNEL: 'create_group_channel',
    MANAGE_PUBLIC_CHANNEL_PROPERTIES: 'manage_public_channel_properties',
    MANAGE_PRIVATE_CHANNEL_PROPERTIES: 'manage_private_channel_properties',
    LIST_PUBLIC_TEAMS: 'list_public_teams',
    JOIN_PUBLIC_TEAMS: 'join_public_teams',
    LIST_PRIVATE_TEAMS: 'list_private_teams',
    JOIN_PRIVATE_TEAMS: 'join_private_teams',
    LIST_TEAM_CHANNELS: 'list_team_channels',
    JOIN_PUBLIC_CHANNELS: 'join_public_channels',
    DELETE_PUBLIC_CHANNEL: 'delete_public_channel',
    CONVERT_PUBLIC_CHANNEL_TO_PRIVATE: 'convert_public_channel_to_private',
    CONVERT_PRIVATE_CHANNEL_TO_PUBLIC: 'convert_private_channel_to_public',
    DELETE_PRIVATE_CHANNEL: 'delete_private_channel',
    EDIT_OTHER_USERS: 'edit_other_users',
    READ_CHANNEL: 'read_channel',
    READ_PUBLIC_CHANNEL: 'read_public_channel',
    ADD_REACTION: 'add_reaction',
    REMOVE_REACTION: 'remove_reaction',
    REMOVE_OTHERS_REACTIONS: 'remove_others_reactions',
    PERMANENT_DELETE_USER: 'permanent_delete_user',
    UPLOAD_FILE: 'upload_file',
    GET_PUBLIC_LINK: 'get_public_link',
    MANAGE_WEBHOOKS: 'manage_webhooks',
    MANAGE_OTHERS_WEBHOOKS: 'manage_others_webhooks',
    MANAGE_INCOMING_WEBHOOKS: 'manage_incoming_webhooks',
    MANAGE_OTHERS_INCOMING_WEBHOOKS: 'manage_others_incoming_webhooks',
    MANAGE_OUTGOING_WEBHOOKS: 'manage_outgoing_webhooks',
    MANAGE_OTHERS_OUTGOING_WEBHOOKS: 'manage_others_outgoing_webhooks',
    MANAGE_OAUTH: 'manage_oauth',
    MANAGE_SYSTEM_WIDE_OAUTH: 'manage_system_wide_oauth',
    CREATE_POST: 'create_post',
    CREATE_POST_PUBLIC: 'create_post_public',
    EDIT_POST: 'edit_post',
    EDIT_OTHERS_POSTS: 'edit_others_posts',
    DELETE_POST: 'delete_post',
    DELETE_OTHERS_POSTS: 'delete_others_posts',
    REMOVE_USER_FROM_TEAM: 'remove_user_from_team',
    CREATE_TEAM: 'create_team',
    MANAGE_TEAM: 'manage_team',
    IMPORT_TEAM: 'import_team',
    VIEW_TEAM: 'view_team',
    LIST_USERS_WITHOUT_TEAM: 'list_users_without_team',
    CREATE_USER_ACCESS_TOKEN: 'create_user_access_token',
    READ_USER_ACCESS_TOKEN: 'read_user_access_token',
    REVOKE_USER_ACCESS_TOKEN: 'revoke_user_access_token',
    MANAGE_JOBS: 'manage_jobs',
    MANAGE_EMOJIS: 'manage_emojis',
    MANAGE_OTHERS_EMOJIS: 'manage_others_emojis',
    CREATE_EMOJIS: 'create_emojis',
    DELETE_EMOJIS: 'delete_emojis',
    DELETE_OTHERS_EMOJIS: 'delete_others_emojis',
    VIEW_MEMBERS: 'view_members',
    INVITE_GUEST: 'invite_guest',
    PROMOTE_GUEST: 'promote_guest',
    DEMOTE_TO_GUEST: 'demote_to_guest',
    USE_CHANNEL_MENTIONS: 'use_channel_mentions',
    USE_GROUP_MENTIONS: 'use_group_mentions',
    READ_OTHER_USERS_TEAMS: 'read_other_users_teams',
    EDIT_BRAND: 'edit_brand',
    READ_JOBS: 'read_jobs',
    DOWNLOAD_COMPLIANCE_EXPORT_RESULT: 'download_compliance_export_result',

    SYSCONSOLE_READ_ABOUT: 'sysconsole_read_about',
    SYSCONSOLE_WRITE_ABOUT: 'sysconsole_write_about',
    SYSCONSOLE_READ_BILLING: 'sysconsole_read_billing',
    SYSCONSOLE_WRITE_BILLING: 'sysconsole_write_billing',
    SYSCONSOLE_READ_REPORTING: 'sysconsole_read_reporting',
    SYSCONSOLE_WRITE_REPORTING: 'sysconsole_write_reporting',
    SYSCONSOLE_READ_USERMANAGEMENT_USERS: 'sysconsole_read_user_management_users',
    SYSCONSOLE_WRITE_USERMANAGEMENT_USERS: 'sysconsole_write_user_management_users',
    SYSCONSOLE_READ_USERMANAGEMENT_GROUPS: 'sysconsole_read_user_management_groups',
    SYSCONSOLE_WRITE_USERMANAGEMENT_GROUPS: 'sysconsole_write_user_management_groups',
    SYSCONSOLE_READ_USERMANAGEMENT_TEAMS: 'sysconsole_read_user_management_teams',
    SYSCONSOLE_WRITE_USERMANAGEMENT_TEAMS: 'sysconsole_write_user_management_teams',
    SYSCONSOLE_READ_USERMANAGEMENT_CHANNELS: 'sysconsole_read_user_management_channels',
    SYSCONSOLE_WRITE_USERMANAGEMENT_CHANNELS: 'sysconsole_write_user_management_channels',
    SYSCONSOLE_READ_USERMANAGEMENT_PERMISSIONS: 'sysconsole_read_user_management_permissions',
    SYSCONSOLE_WRITE_USERMANAGEMENT_PERMISSIONS: 'sysconsole_write_user_management_permissions',
    SYSCONSOLE_READ_USERMANAGEMENT_SYSTEM_ROLES: 'sysconsole_read_user_management_system_roles',
    SYSCONSOLE_WRITE_USERMANAGEMENT_SYSTEM_ROLES: 'sysconsole_write_user_management_system_roles',
    SYSCONSOLE_READ_ENVIRONMENT: 'sysconsole_read_environment',
    SYSCONSOLE_WRITE_ENVIRONMENT: 'sysconsole_write_environment',
    SYSCONSOLE_READ_SITE: 'sysconsole_read_site',
    SYSCONSOLE_WRITE_SITE: 'sysconsole_write_site',
    SYSCONSOLE_READ_AUTHENTICATION: 'sysconsole_read_authentication',
    SYSCONSOLE_WRITE_AUTHENTICATION: 'sysconsole_write_authentication',
    SYSCONSOLE_READ_PLUGINS: 'sysconsole_read_plugins',
    SYSCONSOLE_WRITE_PLUGINS: 'sysconsole_write_plugins',
    SYSCONSOLE_READ_INTEGRATIONS: 'sysconsole_read_integrations',
    SYSCONSOLE_WRITE_INTEGRATIONS: 'sysconsole_write_integrations',
    SYSCONSOLE_READ_COMPLIANCE: 'sysconsole_read_compliance',
    SYSCONSOLE_WRITE_COMPLIANCE: 'sysconsole_write_compliance',
    SYSCONSOLE_READ_EXPERIMENTAL_FEATURES: 'sysconsole_read_experimental_features',
    SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURES: 'sysconsole_write_experimental_features',
    SYSCONSOLE_READ_EXPERIMENTAL_FEATURE_FLAGS: 'sysconsole_read_experimental_feature_flags',
    SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURE_FLAGS: 'sysconsole_write_experimental_feature_flags',
    SYSCONSOLE_READ_EXPERIMENTAL_BLEVE: 'sysconsole_read_experimental_bleve',
    SYSCONSOLE_WRITE_EXPERIMENTAL_BLEVE: 'sysconsole_write_experimental_bleve',

    CHANNEL_MODERATED_PERMISSIONS: {
        CREATE_POST: 'create_post',
        CREATE_REACTIONS: 'create_reactions',
        MANAGE_MEMBERS: 'manage_members',
        USE_CHANNEL_MENTIONS: 'use_channel_mentions',
    },
    MANAGE_BOTS: 'manage_bots',
    MANAGE_OTHERS_BOTS: 'manage_others_bots',
    SYSCONSOLE_READ_PERMISSIONS: [] as string[],
    SYSCONSOLE_WRITE_PERMISSIONS: [] as string[],
    MANAGE_SHARED_CHANNELS: 'manage_shared_channels',
    MANAGE_REMOTE_CLUSTERS: 'manage_remote_clusters',
};

values.SYSCONSOLE_READ_PERMISSIONS = [
    values.SYSCONSOLE_READ_ABOUT,
    values.SYSCONSOLE_READ_BILLING,
    values.SYSCONSOLE_READ_REPORTING,
    values.SYSCONSOLE_READ_USERMANAGEMENT_USERS,
    values.SYSCONSOLE_READ_USERMANAGEMENT_GROUPS,
    values.SYSCONSOLE_READ_USERMANAGEMENT_TEAMS,
    values.SYSCONSOLE_READ_USERMANAGEMENT_CHANNELS,
    values.SYSCONSOLE_READ_USERMANAGEMENT_PERMISSIONS,
    values.SYSCONSOLE_READ_ENVIRONMENT,
    values.SYSCONSOLE_READ_SITE,
    values.SYSCONSOLE_READ_AUTHENTICATION,
    values.SYSCONSOLE_READ_PLUGINS,
    values.SYSCONSOLE_READ_INTEGRATIONS,
    values.SYSCONSOLE_READ_COMPLIANCE,
    values.SYSCONSOLE_READ_EXPERIMENTAL_FEATURES,
    values.SYSCONSOLE_READ_EXPERIMENTAL_FEATURE_FLAGS,
    values.SYSCONSOLE_READ_EXPERIMENTAL_BLEVE,
];

values.SYSCONSOLE_WRITE_PERMISSIONS = [
    values.SYSCONSOLE_WRITE_ABOUT,
    values.SYSCONSOLE_WRITE_BILLING,
    values.SYSCONSOLE_WRITE_REPORTING,
    values.SYSCONSOLE_WRITE_USERMANAGEMENT_USERS,
    values.SYSCONSOLE_WRITE_USERMANAGEMENT_GROUPS,
    values.SYSCONSOLE_WRITE_USERMANAGEMENT_TEAMS,
    values.SYSCONSOLE_WRITE_USERMANAGEMENT_CHANNELS,
    values.SYSCONSOLE_WRITE_USERMANAGEMENT_PERMISSIONS,
    values.SYSCONSOLE_WRITE_ENVIRONMENT,
    values.SYSCONSOLE_WRITE_SITE,
    values.SYSCONSOLE_WRITE_AUTHENTICATION,
    values.SYSCONSOLE_WRITE_PLUGINS,
    values.SYSCONSOLE_WRITE_INTEGRATIONS,
    values.SYSCONSOLE_WRITE_COMPLIANCE,
    values.SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURES,
    values.SYSCONSOLE_WRITE_EXPERIMENTAL_FEATURE_FLAGS,
    values.SYSCONSOLE_WRITE_EXPERIMENTAL_BLEVE,
];

export default values;
