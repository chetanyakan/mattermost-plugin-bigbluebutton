/*
Copyright 2018 Blindside Networks

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import keyMirror from 'key-mirror';

export const ActionTypes = keyMirror({
  RECEIVED_ERROR: null,
  CLICK_CHANNEL: null,
  CREATE_CHANNEL: null,
  CREATE_POST: null,
  CREATE_COMMENT: null,
  POST_DELETED: null,
  POST_UPDATED: null,
  REMOVE_POST: null,

  RECEIVED_CHANNELS: null,
  RECEIVED_CHANNEL: null,
  RECEIVED_CHANNEL_MEMBER: null,
  RECEIVED_MORE_CHANNELS: null,
  RECEIVED_CHANNEL_STATS: null,
  RECEIVED_MY_CHANNEL_MEMBERS: null,
  RECEIVED_MEMBERS_IN_CHANNEL: null,

  FOCUS_POST: null,
  RECEIVED_POSTS: null,
  RECEIVED_FOCUSED_POST: null,
  RECEIVED_POST: null,
  RECEIVED_EDIT_POST: null,
  EDIT_POST: null,
  SELECT_POST: null,
  RECEIVED_POST_SELECTED: null,
  RECEIVED_MENTION_DATA: null,
  RECEIVED_ADD_MENTION: null,
  RECEIVED_POST_PINNED: null,
  RECEIVED_POST_UNPINNED: null,
  INCREASE_POST_VISIBILITY: null,
  LOADING_POSTS: null,

  UPDATE_RHS_STATE: null,
  UPDATE_RHS_SEARCH_TERMS: null,
  UPDATE_RHS_SEARCH_RESULTS_TERMS: null,

  SET_RHS_EXPANDED: null,
  TOGGLE_RHS_EXPANDED: null,

  UPDATE_MOBILE_VIEW: null,

  SEARCH_FLAGGED_POSTS_REQUEST: null,
  SEARCH_FLAGGED_POSTS_SUCCESS: null,
  SEARCH_FLAGGED_POSTS_FAILURE: null,

  SEARCH_PINNED_POSTS_REQUEST: null,
  SEARCH_PINNED_POSTS_SUCCESS: null,
  SEARCH_PINNED_POSTS_FAILURE: null,

  RECEIVED_PROFILES: null,
  RECEIVED_PROFILES_IN_TEAM: null,
  RECEIVED_PROFILES_NOT_IN_TEAM: null,
  RECEIVED_PROFILE: null,
  RECEIVED_PROFILES_IN_CHANNEL: null,
  RECEIVED_PROFILES_NOT_IN_CHANNEL: null,
  RECEIVED_PROFILES_WITHOUT_TEAM: null,
  RECEIVED_ME: null,
  RECEIVED_SESSIONS: null,
  RECEIVED_AUDITS: null,
  RECEIVED_TEAMS: null,
  RECEIVED_STATUSES: null,
  RECEIVED_PREFERENCE: null,
  RECEIVED_PREFERENCES: null,
  DELETED_PREFERENCES: null,
  RECEIVED_FILE_INFOS: null,
  RECEIVED_ANALYTICS: null,

  RECEIVED_INCOMING_WEBHOOKS: null,
  RECEIVED_INCOMING_WEBHOOK: null,
  UPDATED_INCOMING_WEBHOOK: null,
  REMOVED_INCOMING_WEBHOOK: null,
  RECEIVED_OUTGOING_WEBHOOKS: null,
  RECEIVED_OUTGOING_WEBHOOK: null,
  UPDATED_OUTGOING_WEBHOOK: null,
  REMOVED_OUTGOING_WEBHOOK: null,
  RECEIVED_COMMANDS: null,
  RECEIVED_COMMAND: null,
  UPDATED_COMMAND: null,
  REMOVED_COMMAND: null,
  RECEIVED_OAUTHAPPS: null,
  RECEIVED_OAUTHAPP: null,
  REMOVED_OAUTHAPP: null,

  RECEIVED_CUSTOM_EMOJIS: null,
  RECEIVED_CUSTOM_EMOJI: null,
  UPDATED_CUSTOM_EMOJI: null,
  REMOVED_CUSTOM_EMOJI: null,

  RECEIVED_REACTIONS: null,
  ADDED_REACTION: null,
  REMOVED_REACTION: null,

  RECEIVED_MSG: null,

  RECEIVED_TEAM: null,
  RECEIVED_MY_TEAM: null,
  CREATED_TEAM: null,
  UPDATE_TEAM: null,

  SET_NAVIGATION_BLOCKED: null,
  DEFER_NAVIGATION: null,
  CANCEL_NAVIGATION: null,
  CONFIRM_NAVIGATION: null,
  RECEIVED_CONFIG: null,
  RECEIVED_LOGS: null,
  RECEIVED_SERVER_AUDITS: null,
  RECEIVED_SERVER_COMPLIANCE_REPORTS: null,
  RECEIVED_ALL_TEAMS: null,
  RECEIVED_ALL_TEAM_LISTINGS: null,
  RECEIVED_MY_TEAM_MEMBERS: null,
  RECEIVED_MY_TEAMS_UNREAD: null,
  RECEIVED_MEMBERS_IN_TEAM: null,
  RECEIVED_TEAM_STATS: null,

  RECEIVED_LOCALE: null,

  UPDATE_OPEN_GRAPH_METADATA: null,
  RECIVED_OPEN_GRAPH_METADATA: null,

  SHOW_SEARCH: null,

  TOGGLE_ACCOUNT_SETTINGS_MODAL: null,
  TOGGLE_SHORTCUTS_MODAL: null,
  TOGGLE_IMPORT_THEME_MODAL: null,
  TOGGLE_INVITE_MEMBER_MODAL: null,
  TOGGLE_LEAVE_TEAM_MODAL: null,
  TOGGLE_DELETE_POST_MODAL: null,
  TOGGLE_GET_POST_LINK_MODAL: null,
  TOGGLE_GET_TEAM_INVITE_LINK_MODAL: null,
  TOGGLE_GET_PUBLIC_LINK_MODAL: null,
  TOGGLE_QUICK_SWITCH_MODAL: null,
  TOGGLE_CHANNEL_HEADER_UPDATE_MODAL: null,
  TOGGLE_CHANNEL_PURPOSE_UPDATE_MODAL: null,
  TOGGLE_CHANNEL_NAME_UPDATE_MODAL: null,
  TOGGLE_LEAVE_PRIVATE_CHANNEL_MODAL: null,
  SHOW_EDIT_POST_MODAL: null,
  HIDE_EDIT_POST_MODAL: null,

  SUGGESTION_PRETEXT_CHANGED: null,
  SUGGESTION_RECEIVED_SUGGESTIONS: null,
  SUGGESTION_CLEAR_SUGGESTIONS: null,
  SUGGESTION_COMPLETE_WORD: null,
  SUGGESTION_SELECT_NEXT: null,
  SUGGESTION_SELECT_PREVIOUS: null,

  BROWSER_CHANGE_FOCUS: null,

  EMOJI_POSTED: null,

  RECEIVED_PLUGIN_COMPONENTS: null,
  RECEIVED_PLUGIN_POST_TYPES: null,
  RECEIVED_PLUGIN_MENU_ACTIONS: null,
  RECEIVED_WEBAPP_PLUGINS: null,
  RECEIVED_WEBAPP_PLUGIN: null,
  REMOVED_WEBAPP_PLUGIN: null,

  MODAL_OPEN: null,
  MODAL_CLOSE: null,

  POPOVER_MENTION_KEY_CLICK: null,

  SELECT_CHANNEL_WITH_MEMBER: null,

  INCREMENT_EMOJI_PICKER_PAGE: null,

  TOGGLE_LHS: null,
  OPEN_LHS: null,
  CLOSE_LHS: null,

  TOGGLE_RHS_MENU: null,
  OPEN_RHS_MENU: null,
  CLOSE_RHS_MENU: null,

  INIT_WEBRTC: null,
  CLOSE_WEBRTC: null,

  STORE_REHYDRATION_FAILED: null,

  DISMISS_NOTICE: null
});
export const RHSStates = {
  MENTION: 'mention',
  SEARCH: 'search',
  FLAG: 'flag',
  PIN: 'pin'
};