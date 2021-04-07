export interface TaskDetail {
  gid: string;
  resource_type: string;
  name: string;
  approval_status: string;
  completed: boolean;
  completed_at: string;
  completed_by: {
    gid: string;
    resource_type: string;
    name: string;
  };
  created_at: string;
  dependencies: [
    {
      gid: string;
      resource_type: string;
    }
  ];
  dependents: [
    {
      gid: string;
      resource_type: string;
    }
  ];
  due_at: string;
  due_on: string;
  external: {
    data: string;
    gid: string;
  };
  hearted: boolean;
  hearts: [
    {
      gid: string;
      user: {
        gid: string;
        resource_type: string;
        name: string;
      };
    }
  ];
  html_notes: string;
  is_rendered_as_separator: false;
  liked: true;
  likes: [
    {
      gid: string;
      user: {
        gid: string;
        resource_type: string;
        name: string;
      };
    }
  ];
  memberships: [
    {
      project: {
        gid: string;
        resource_type: string;
        name: string;
      };
      section: {
        gid: string;
        resource_type: string;
        name: string;
      };
    }
  ];
  modified_at: string;
  notes: string;
  num_hearts: number;
  num_likes: number;
  num_subtasks: number;
  resource_subtype: string;
  start_on: string;
  assignee: {
    gid: string;
    resource_type: string;
    name: string;
  };
  custom_fields: [
    {
      gid: string;
      resource_type: string;
      currency_code: string;
      custom_label: string;
      custom_label_position: string;
      description: string;
      display_value: string;
      enabled: boolean;
      enum_options: [
        {
          gid: string;
          resource_type: string;
          color: string;
          enabled: boolean;
          name: string;
        }
      ];
      enum_value: {
        gid: string;
        resource_type: string;
        color: string;
        enabled: true;
        name: string;
      };
      format: string;
      has_notifications_enabled: boolean;
      is_global_to_workspace: boolean;
      name: string;
      number_value: number;
      precision: number;
      resource_subtype: string;
      text_value: string;
      type: string;
    }
  ];
  followers: [
    {
      gid: string;
      resource_type: string;
      name: string;
    }
  ];
  parent: {
    gid: string;
    resource_type: string;
    name: string;
  };
  permalink_url: string;
  projects: [
    {
      gid: string;
      resource_type: string;
      name: string;
    }
  ];
  tags: [
    {
      gid: string;
      name: string;
    }
  ];
  workspace: {
    gid: string;
    resource_type: string;
    name: string;
  };
}
