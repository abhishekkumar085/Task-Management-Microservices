const monggoose = require('mongoose');

const userSchema = new monggoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, {
    timestamps: true
})

userSchema.index({ status: 1 });
userSchema.index({ name: 1 });
userSchema.index({ createdAt: -1 });


const User = monggoose.model('users', userSchema);

module.exports = User;