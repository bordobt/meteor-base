UserProfileSchema = new SimpleSchema({
	fullname: {
		type: String
	}
});

EmailSchema = new SimpleSchema({
	address: {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	verified: {
		type: Boolean
	}
});

UserSchema = new SimpleSchema({
	username: {
		type: String,
		optional: true
	},
	emails: {
		type: [EmailSchema],
		optional: true
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	profile: {
		type: UserProfileSchema
	},
	roles: {
		type: Array,
		optional: true
	},
	'roles.$': {
		type: String
	},
	createdAt: {
		type: Date,
		autoValue:function(){
			return new Date();
		}
	}
});

Meteor.users.attachSchema(UserSchema);
