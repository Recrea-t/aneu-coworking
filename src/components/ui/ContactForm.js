import React from "react"

import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Checkbox,
} from "@chakra-ui/react"
import { MotionButton } from "../../theme/utils"
import { useToast } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"

import LocalizedLink from "../ui/LocalizedLink"
import useTranslations from "../useTranslations"

const ContactForm = () => {
  const toast = useToast()

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const {
    name,
    email,
    message,
    conditionsPart1,
    conditionsPart2,
    submit,
    submitting,
    errorConditions,
    messageSuccessfulTitle,
    messageSuccessfulDescription,
    privacyPolicy,
  } = useTranslations()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        conditions: false,
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contacte-web",
            ...values,
          }),
        })
          .then(() => {
            actions.resetForm()
            toast({
              title: { messageSuccessfulTitle },
              description: { messageSuccessfulDescription },
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          })
          .catch(error => alert(error))
          .finally(() => actions.setSubmitting(false))
      }}
      validate={values => {
        const errors = {}
        if (!values.conditions) {
          errors.conditions = { errorConditions }
        }
        return errors
      }}
    >
      {props => (
        <Form
          name="contacte-web"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="form-name" />
          <Field type="hidden" name="bot-field" />

          <VStack spacing={4}>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="name">{name}</FormLabel>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    variant="filled"
                    borderRadius={0}
                    colorScheme="veryLightGrey"
                    focusBorderColor="veryLightGrey.700"
                  />
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="email">{email}</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    variant="filled"
                    borderRadius={0}
                    colorScheme="veryLightGrey"
                    focusBorderColor="veryLightGrey.700"
                  />
                </FormControl>
              )}
            </Field>

            <Field name="message">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel htmlFor="message">{message}</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    variant="filled"
                    borderRadius={0}
                    colorScheme="veryLightGrey"
                    focusBorderColor="veryLightGrey.700"
                    h={40}
                    resize="none"
                  />
                </FormControl>
              )}
            </Field>

            <Field name="conditions">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.conditions && form.touched.conditions}
                >
                  <Checkbox
                    {...field}
                    id="conditions"
                    size="sm"
                    colorScheme="nightRider"
                    fontSize="xs"
                  >
                    {conditionsPart1}
                    <LocalizedLink
                      textTransform="uppercase"
                      to="/proteccio-de-dades"
                    >
                      {privacyPolicy}
                    </LocalizedLink>
                    {conditionsPart2}
                  </Checkbox>
                  <FormErrorMessage>{form.errors.conditions}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <MotionButton
              variant="custom-link"
              alignSelf="flex-start"
              type="submit"
              isLoading={props.isSubmitting}
              loadingText={submitting}
              whileTap={{ scale: 0.95 }}
            >
              {submit}
            </MotionButton>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
