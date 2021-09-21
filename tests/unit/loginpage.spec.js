import { shallowMount } from '@vue/test-utils'
import Login from '@/components/LoginPage'

const wrapper = shallowMount(Login)


describe('login.vue', () => {
    test('should show the form element on the screen', () => {
        expect(wrapper.find("form").exists()).toBe(true)
    }),

    test('should contain input fields', () => {
        expect(wrapper.find('form > input').exists()).toBe(true)
    })

    test('form should contain input fields with type="text"', () => {
        expect(wrapper.get('input[type=text]').exists()).toBe(true)
    })

    test('button trigger event', async () => {
        await wrapper.find('form > button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('submit')
    })

})
